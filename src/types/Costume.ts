/**
 * コスチューム（霊衣）を表す部品用のクラス.
 */
export class Costume {
  constructor(
    // id
    private _id: number,
    // 霊衣の番号
    private _costumeCollectionNo: number,
    // バトル時のID
    private _battleCharaId: number,
    // ショートネーム
    private _shortName: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get costumeCollectionNo(): number {
    return this._costumeCollectionNo;
  }

  public set costumeCollectionNo(costumeCollectionNo: number) {
    this._costumeCollectionNo = costumeCollectionNo;
  }

  public get battleCharaId(): number {
    return this._battleCharaId;
  }

  public set battleCharaId(battleCharaId: number) {
    this._battleCharaId = battleCharaId;
  }

  public get shortName(): string {
    return this._shortName;
  }

  public set shortName(shortName: string) {
    this._shortName = shortName;
  }
}
