import { IModule } from "@core/lib/module";
import { RendererRegistry } from "@core/lib/plugins/renderer";
import { Dashboard } from "./components/Dashboard";

export const module: IModule = {
    name: "analytics",
}

RendererRegistry.get<any>("admin.homepage").register(0, Dashboard);