import numpy as np
from matplotlib.colors import hsv_to_rgb


def generate_color_palette_2d(hue, saturation_steps=5, lightness_steps=5):
    """
    根据指定的色相生成二维颜色调色板，并扁平化为一维数组。

    参数：
        hue (float): 色相，范围 [0, 360)
        saturation_steps (int): 饱和度的步骤数
        lightness_steps (int): 亮度的步骤数

    返回：
        dict: 颜色调色板，键为 "S{step}_L{step}"，值为十六进制颜色字符串
    """
    # 定义调色板的键
    palette = {}

    # 将色相从度数转换为 [0, 1] 范围
    h = hue / 360.0

    # 生成饱和度和亮度的线性空间
    # 从高饱和度到低饱和度
    saturation = np.linspace(0.9, 0.3, saturation_steps)  # 可根据需要调整范围
    # 从高亮度到低亮度
    lightness = np.linspace(0.95, 0.15, lightness_steps)  # 可根据需要调整范围

    # 创建二维网格
    S, L = np.meshgrid(saturation, lightness)

    # 扁平化饱和度和亮度
    S_flat = S.flatten()
    L_flat = L.flatten()

    # 生成键和值
    for i in range(saturation_steps):
        for j in range(lightness_steps):
            # 计算索引
            index = i * lightness_steps + j + 1
            # 定义键，例如 "S1_L1", "S1_L2", ..., "S5_L5"
            key = f"S{i+1}_L{j+1}"
            # 获取饱和度和亮度
            s = S_flat[i * lightness_steps + j]
            l = L_flat[i * lightness_steps + j]
            # 将 HSL 转换为 RGB
            rgb = hsl_to_rgb(h, s, l)
            # 转换为十六进制
            hex_color = rgb_to_hex(rgb)
            # 添加到调色板
            palette[key] = hex_color

    return palette


def hsl_to_rgb(h, s, l):
    """
    将 HSL 颜色转换为 RGB。

    参数：
        h (float): 色相，范围 [0, 1]
        s (float): 饱和度，范围 [0, 1]
        l (float): 亮度，范围 [0, 1]

    返回：
        tuple: RGB 颜色，范围 [0, 1]
    """
    if s == 0:
        r = g = b = l  # 灰色
    else:

        def hue_to_rgb(p, q, t):
            if t < 0:
                t += 1
            if t > 1:
                t -= 1
            if t < 1 / 6:
                return p + (q - p) * 6 * t
            if t < 1 / 2:
                return q
            if t < 2 / 3:
                return p + (q - p) * (2 / 3 - t) * 6
            return p

        q = l * (1 + s) if l < 0.5 else l + s - l * s
        p = 2 * l - q
        r = hue_to_rgb(p, q, h + 1 / 3)
        g = hue_to_rgb(p, q, h)
        b = hue_to_rgb(p, q, h - 1 / 3)

    return (r, g, b)


def rgb_to_hex(rgb):
    """
    将 RGB 颜色转换为十六进制字符串。

    参数：
        rgb (tuple): RGB 颜色，范围 [0, 1]

    返回：
        str: 十六进制颜色字符串，例如"#e3f9e5"
    """
    return "#{:02x}{:02x}{:02x}".format(
        int(round(rgb[0] * 255)), int(round(rgb[1] * 255)), int(round(rgb[2] * 255))
    )


def print_palette(palette):
    """
    以指定格式打印颜色调色板。

    参数：
        palette (dict): 颜色调色板
    """
    print("{")
    for key in sorted(
        palette.keys(),
        key=lambda x: (int(x.split("_")[0][1:]), int(x.split("_")[1][1:])),
    ):
        print(f'    "{key}": "{palette[key]}",')
    print("}")


if __name__ == "__main__":
    # 选择一个色相，例如绿色（120度）
    selected_hue = 190  # 可以更改为任何0-360之间的值

    # 定义饱和度和亮度的步骤数
    saturation_steps = 5  # 行数
    lightness_steps = 5  # 列数

    # 生成颜色调色板
    color_palette = generate_color_palette_2d(
        selected_hue, saturation_steps, lightness_steps
    )

    # 打印颜色调色板
    print("生成的颜色调色板：")
    print_palette(color_palette)
