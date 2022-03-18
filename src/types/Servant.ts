import { Costume } from "@/types/Costume";

export class Servant {
  constructor(
    private _id: number,
    private _collectionNo: number,
    private _name: string,
    private _type: string,
    private _flag: string,
    private _className: string,
    private _attribute: string,
    private _rarity: number,
    private _atkMax: number,
    private _hpMax: number,
    private _face: string,
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
