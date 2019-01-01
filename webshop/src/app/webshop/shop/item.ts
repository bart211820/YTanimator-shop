export class Item {
  constructor(public itemID?: Number, public itemName?: String, public itemDescription?: String, public itemPrice?: Number, public itemImage?: String, public itemType?: String, public itemAnimatorID?: Number) {

  }

  public getData() {
    const data = {
      itemID: this.itemID,
      itemName: this.itemName,
      itemDescription: this.itemDescription,
      itemPrice: this.itemPrice,
      itemImage: this.itemImage,
      itemType: this.itemType,
      itemAnimatorID: this.itemAnimatorID
    };
    return data;
  }

  public getItemID() {
    return this.itemID;
  }

  public getItemName() {
    return this.itemName;
  }

  public getItemDescription() {
    return this.itemDescription;
  }

  public getItemPrice() {
    return this.itemPrice;
  }

  public getItemImage() {
    return this.itemImage;
  }

  public getItemType() {
    return this.itemType;
  }

  public getItemAnimatorId() {
    return this.itemAnimatorID;
  }
}
