import { adminPlugins } from "@admin";
import { Dashboard } from "@admin/components/Dashboard";
import { IModule } from "@core/lib/module";

export const module: IModule = {
    name: "analytics",
}

adminPlugins.homepage.register(0, Dashboard);