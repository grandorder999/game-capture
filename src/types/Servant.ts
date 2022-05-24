import { Costume } from "@/types/Costume";
/**
 * サーヴァントを表す部品用のクラス.
 */
export class Servant {
  constructor(
    // id
    private _id: number,
    // コレクション番号
    private _collectionNo: number,
    // サーヴァント名
    private _name: string,
    // タイプ
    private _type: string,
    // フラッグ
    private _flag: string,
    // クラス名
    private _className: string,
    // 属性
    private _attribute: string,
    // レア度
    private _rarity: number,
    // 最大攻撃威力
    private _atkMax: number,
    // 最大HP
    private _hpMax: number,
    // 画像URL
    private _face: string,
    // 霊衣
    private _costume: Array<Costume>
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get collectionNo(): number {
    return this._collectionNo;
  }

  public set collectionNo(collectionNo: number) {
    this._collectionNo = collectionNo;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get type(): string {
    return this._type;
  }

  public set type(type: string) {
    this._type = type;
  }

  public get flag(): string {
    return this._flag;
  }

  public set flag(flag: string) {
    this._flag = flag;
  }

  public get className(): string {
    return this._className;
  }

  public set className(className: string) {
    this._className = className;
  }

  public get attribute(): string {
    return this._attribute;
  }

  public set attribute(attribute: string) {
    this._attribute = attribute;
  }

  public get rarity(): number {
    return this._rarity;
  }

  public set rarity(rarity: number) {
    this._rarity = rarity;
  }

  public get atkMax(): number {
    return this._atkMax;
  }

  public set atkMax(atkMax: number) {
    this._atkMax = atkMax;
  }

  public get hpMax(): number {
    return this._hpMax;
  }

  public set hpMax(hpMax: number) {
    this._hpMax = hpMax;
  }

  public get face(): string {
    return this._face;
  }

  public set face(face: string) {
    this._face = face;
  }

  public get costume(): Array<Costume> {
    return this._costume;
  }

  public set costume(costume: Array<Costume>) {
    this._costume = costume;
  }
}
