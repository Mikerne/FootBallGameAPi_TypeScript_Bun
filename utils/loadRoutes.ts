import type { Elysia } from "elysia";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

export const loadRoutes = async (app: Elysia, dir = "./routes") => {
    const entries = await readdir(dir);

    for (const file of entries) {
        const fullPath = join(dir, file);
        const info = await stat(fullPath);

        if (info.isDirectory()) {
            await loadRoutes(app, fullPath); // 📁 Gå ned i undermapper
        } else if (info.isFile() && [".ts", ".js"].includes(extname(file))) {
            const route = await import(fullPath);
            if (route.default) {
                app.use(route.default); // 🔌 Brug default export som en route
            }
        }
    }

    return app;
};
