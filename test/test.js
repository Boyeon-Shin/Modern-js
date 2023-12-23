const products = ["Product 1", "Product 2", "Product 3"];

// products 배열을 map 함수로 순회하면서 li 태그로 출력
const productList = products.map((product) => `<li>${product}</li>`);

// 변환된 li 태그들을 문자열로 합침
const renderedList = productList.join("");

// 결과를 어떻게 사용할지는 여러 가지 방법이 있습니다.
// 예를 들어, 어떤 요소의 innerHTML로 설정하거나, 콘솔에 출력하거나 등등...
console.log(renderedList);
