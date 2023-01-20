// 아이템을 수정, 등록 할때 사용
export default interface BaseItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

// 특정한 값을 검색하거나 삭제할때 사용
export interface Item extends BaseItem {
  id: number;
}