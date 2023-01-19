# Node.js 로 만든 크롤러 TypeScript로 바꿔보기

타입스크립트 사용

```bash
npm install typescript -D
```

노드 사용

```bash
npm install @types/node -D
```

puppeteer 사용

```bash
npm install puppeteer
```

---

## **주요 변경**

interface 추가

```typescript
interface pokemon {
  id: string;
  image: string;
  name: string;
  details: string;
}
```

pokemon 타입은 리턴 데이터 타입에 사용.

```typescript
const data: pokemon[] = [];
...
const id: string = ...;
const image: string = ...;
const name: string = ...;
const details: string = ...;
...
data.push({id,image,name,details});
...
return data;
```

함수 리턴타입 지정

```typescript
async function scrape(): Promise<pokemon[] | undefined>
{...}
```
