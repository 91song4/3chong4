기본 설정
```bash
npm init -y
tsc --init
```

사용모듈
- express
- dotenv
- cors
- typescript -D
- @types/(node, express, dotenv, cors) -D
- ts-node-dev -D  
  파일이 변경되면 자동으로 변경된 ts파일을 실행시켜준다.

  
API 목록
```bash
# get all items
GET /api/menu/items

# get a single item using an id parameter
GET /api/menu/items/:id

# create an item
POST /api/menu/items

# update an item using an id parameter
PUT /api/menu/items/:id

# remove an item using an id parameter
DELETE /api/menu/items/:id
```

다 만들고 보니 재밌다  
그런데 뭔가.. 음.. 뭔지모를 모름? 음.. 잘 모르겠지만 뭔가.. 재밌긴한... 음... 음...  
문제가 크게 막히지도않고.. 분명 오늘 한만큼 조금은 배웠을텐데..  
뭘 배웠을까 돌아보면 잘 모르겠다..  
뭐라고 대답을 해야할 지 ..  
  
그래도 억지로 꼽아보자..!
- import를 사용해본것  
  여지껏 require를 사용해서 모듈들을 불러왔었는데 새로웠다.
- import * as 식별자별칭 from "";  
  불러온 export를 모아서 사용
- export default 를 사용한 것과 그렇지 않은것에 대한 차이  
  참조사이트 읽어가며 이해가 쏙쏙 잘 됐다. 저번부터 이분 사이트 글들이 눈에 잘 읽힌다.  
  https://www.zerocho.com/category/TypeScript/post/5bab2086103eac558e45cdd7  
  https://www.zerocho.com/category/ECMAScript/post/579dca4054bae71500727ab9  
  https://www.zerocho.com/category/NodeJS/post/5835b500373b5b0018a81a10  
- 인덱스 시그니처  
  아직은 용어와 대충 아 이런거구나 라고만 알고있다. 첨부한 사이트를 읽고 이해를 해봐야겠다.  
  https://developer-talk.tistory.com/297

이렇게 꼽아보고 이제 다시 공부를 하러 가봐야겠다.  
아참 궁금한 점이 있긴했다.  

```typescript
// items.service
export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};
```
서비스에서 분명 id체크를 하기도하고, 파라미터로 id와 수정할 객체를 BaseItem 타입으로 가져온다.  
그래서 items.router에서 수정API를 작성할 때 나는 id와 BaseItem타입 데이터를 구분했다.
```typescript
// items.router
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const itemId: number = parseInt(req.params.id, 10);
    const item: BaseItem = req.body;

    const updatedItem = await ItemService.update(itemId, item);
    if (!updatedItem) return res.status(404).send("item not found");

    res.status(200).send(updatedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
```
그리곤 맞게 작성했나 확인하려 예제를 봤는데  
내가 생각하고 작성했던 코드와는 조금 다르다.
```typescript
//예제의 코드
itemsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const itemUpdate: Item = req.body;

    const existingItem: Item = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
```
itemUpdate: Item 이부분에서 Item 타입으로 받고있다. 나는 BaseItem 타입으로 받을 줄 알았다.  
그리고 existingItem = awiat ItemService.find(id) 를 통해서 id검사를 하고있다.  
existingItem에 데이터가 있으면 ItemService.update함수를 호출하고  
update 함수에 진입해보면 find를 id값으로 또 한다. 왜 두번이나 검사를하지? 라는 의문이 들었다.  
이에대한 궁금증은 좀 알고싶다. 왜 이렇게 사용하는지.  
그리고 만약 existingItem이 null일 경우 ItemService.create를 통해서 새로 생성하게 되는데  
수정API에 들어와서 생성까지 해준다는게 조금.. 안될건 없겠지만 내마음이 불편하다.  
이렇게 요거저거 넣는다면 왜 분리를 했고, 모듈화를 하고..  
어디서부터 어디까지는 허용인지에 대한 기준을 못잡겠으니 마음이 불편한가보다.  
많이 적고 알아내고 해야 불편하지 않을까? 이것도 역시 물어봐야한다.  
  
질문을 하고싶다는 욕구는 여기에서 들었다.  
  
  ***
TIL이 간단히 써진다.. 30분이면 쓴다.. 이러한 특강을 들었지만  
나는 아직 공부가 모자란가보다..  
간단한 질문조차 글로 쓰려다보니 정리가 필요하고,  
이단어를 이상황에 쓰는게 맞나 싶어 검색해서 문장에 어울리게 단어를 바꾸기도 하고,  
물론 지금도 엉터리겠지만 나름대로 고민과 시간이 많이 들어간 글이다.  
TIL을 쓰기위해 투자되는 시간이 너무 길다. 줄이고 싶은데 짧게 간단하게 쓰고싶은데,  
아는게 없으니 그럴수가 없다. 오.. 아는게 많아지고 그러면 짧게 쓸수있으려나 모르겠다.  
  
TIL을 왜 쓰나? 나는 내 글을 돌아본적이 없는데  
TIL에 무엇을 쓰나? 하루하루 배워가며 어렴풋이 이해한것들 알게된것들 많다.  
어렴풋이 이해한게 검색을통해 어떤것인지 알아갈땐 내가 제대로 안것도아니였고,  
이것저것 연관되어, 거대한 정보들에 둘러쌓이면... 진짜 개똥이다.  
여태 적어내려갔던 글들을 다 삭제하고 인터넷창을 꺼버린다.  
  
대충 알겠다고 생각했던 것들, 조금은 이해했다고 생각했던 것들  
조금 더 알아볼까 하고 검색했다가 진짜 개뚜까맞는다.  
아는게 하나도 없어 하나도  
반복문 사용할 줄 아세요? 변수가 뭔 줄 아세요? 함수가 뭘까요?  
이질문들이 간단히 들리지가 않는다 내가 또 모르는 내용이 더 있을까 씨발
  
그래 TIL은 한풀이다 하소연이다 스트레스 푸는 장소이다. 그래  
그럼 이제 또 열공하러 가자