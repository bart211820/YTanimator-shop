package nl.hsleiden.model;

public class Basket {
    private int baskedID;
    private int baskedUserID;
    private int baskedItemID;
    private int baskedItemAmount;

    public Basket() {

    }

    public Basket(int baskedID, int baskedUserID, int baskedItemID, int baskedItemAmount) {
        this.baskedID = baskedID;
        this.baskedUserID = baskedUserID;
        this.baskedItemID = baskedItemID;
        this.baskedItemAmount = baskedItemAmount;
    }

    public int getBaskedID() {
        return baskedID;
    }

    public void setBaskedID(int baskedID) {
        this.baskedID = baskedID;
    }

    public int getBaskedUserID() {
        return baskedUserID;
    }

    public void setBaskedUserID(int baskedUserID) {
        this.baskedUserID = baskedUserID;
    }

    public int getBaskedItemID() {
        return baskedItemID;
    }

    public void setBaskedItemID(int baskedItemID) {
        this.baskedItemID = baskedItemID;
    }

    public int getBaskedItemAmount() {
        return baskedItemAmount;
    }

    public void setBaskedItemAmount(int baskedItemAmount) {
        this.baskedItemAmount = baskedItemAmount;
    }
}
