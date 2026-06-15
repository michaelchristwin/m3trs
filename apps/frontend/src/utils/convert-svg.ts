function copyToCanvas({
  source,
  target,
  scale,
  quality,
}: {
  quality: number;
  scale: number;
  target: Node;
  source: Element;
}) {
  let svgData = new XMLSerializer().serializeToString(target);
  let canvas = document.createElement("canvas");
  let svgSize = source.getBoundingClientRect();

  //Resize can break shadows
  canvas.width = svgSize.width * scale;
  canvas.height = svgSize.height * scale;
  canvas.style.width = svgSize.width.toString();
  canvas.style.height = svgSize.height.toString();

  let ctxt = canvas.getContext("2d");
  if (!ctxt) return;
  ctxt.scale(scale, scale);

  let img = document.createElement("img");

  const bytes = new TextEncoder().encode(svgData);

  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join(
    "",
  );

  img.setAttribute("src", "data:image/svg+xml;base64," + btoa(binary));
  img.onload = () => {
    ctxt.drawImage(img, 0, 0);
  };
  return new Promise((resolve) => {
    img.onload = () => {
      ctxt.drawImage(img, 0, 0);
      resolve(canvas.toDataURL(`image/png`, quality));
    };
  });
}

export const convertToPng = async (
  source: Element,
  { scale = 1, background = "transparent" },
) => {
  //source = source instanceof Element ? source : document.querySelector(source);

  const target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  target.innerHTML = source.innerHTML;
  target.style.background = background;
  for (const attr of source.attributes) {
    target.setAttribute(attr.name, attr.value);
  }

  //Copy all html to a new canvas
  return copyToCanvas({
    source,
    target,
    scale,
    quality: 8.5,
  });
};
