// types.d.ts 或者其他你放置类型的文件
declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
}

type ImportMetaGlob = (
    pattern: string,
    options?: { eager?: boolean; import?: "auto" | "json" | "default-only" }
) => Record<string, () => Promise<{ default: string }>>;
