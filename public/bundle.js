(()=>{"use strict";eval('\n;// CONCATENATED MODULE: ./src/form.ts\nconst formData = (form) => {\r\n    const inputs = form.querySelectorAll("input");\r\n    let values = {};\r\n    inputs.forEach(i => (values[i.id] = i.value));\r\n    return values;\r\n};\r\n\n;// CONCATENATED MODULE: ./src/index.ts\n\r\nconst src_form = document.querySelector("form");\r\nsrc_form.addEventListener("submit", e => {\r\n    e.preventDefault();\r\n    const data = formData(src_form);\r\n    console.log(data);\r\n});\r\nconst person = {};\r\nconsole.log(person.speak());\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UeXBlU2NyaXB0X1dlYnBhY2svLi9zcmMvZm9ybS50cz83ZTE0Iiwid2VicGFjazovL1R5cGVTY3JpcHRfV2VicGFjay8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQU8sTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTlDLElBQUksTUFBTSxHQUErQixFQUFFLENBQUM7SUFFNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUU5QyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7OztBQ1JnQztBQUVsQyxNQUFNLFFBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUFDO0FBRTdDLFFBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRW5CLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFJLENBQUMsQ0FBQztJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiNTkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZvcm1EYXRhID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xyXG5cclxuICBsZXQgdmFsdWVzOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICBpbnB1dHMuZm9yRWFjaChpID0+ICh2YWx1ZXNbaS5pZF0gPSBpLnZhbHVlKSk7XHJcblxyXG4gIHJldHVybiB2YWx1ZXM7XHJcbn07XHJcbiIsImltcG9ydCB7IGZvcm1EYXRhIH0gZnJvbSBcIi4vZm9ybVwiO1xyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpITtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBmb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbn0pO1xyXG5cclxuY29uc3QgcGVyc29uOiBhbnkgPSB7fTtcclxuY29uc29sZS5sb2cocGVyc29uLnNwZWFrKCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///590\n')})();