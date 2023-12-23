export function getContext() {
    const canvasEl = document.querySelector("canvas");
    const context = canvasEl.getContext("2d");

    context.imageSmoothingEnabled = false;

    return context;
}

export function drawFrame(context, image, dimensions, x, y, direction = 1) {
    const [sourceX, sourceY, sourceWidth, sourcheHeight] = dimensions;

    context.scale(direction, 1);
    context.drawImage(
        image,
        sourceX, sourceY, sourceWidth, sourcheHeight,
        x * direction, y, sourceWidth, sourcheHeight,
    );
    context.setTransform(1, 0, 0, 1, 0, 0);
}