## Canvas2D-TS

> 面向对象使用 Canvas2D,采用链式调用的方式更加适合熟悉原生 canvas 相关 API

##### 示例

```html
<script type="module">
  import { Canvas2D } from "../dist/canvas2d.js";
  let canvas2d = new Canvas2D("#app");
  canvas2d
    .initStyle()
    .setStrokeStyle("#555")
    .end()
    .initRect()
    .setLTPoint(0, 0)
    .setRBPoint(100, 100)
    .buildRectPath()
    .stroke();
</script>
```
