package nl.hsleiden.persistence;

import nl.hsleiden.Database;
import nl.hsleiden.model.Item;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ItemDAO {
    private Database database;
    private PreparedStatement statement;
    private String query;
    private List<Item> results;

    public ItemDAO() {
        this.database = Database.getInstance();
    }

    public List<Item> selectItems(PreparedStatement statement) throws SQLException{
        ResultSet items = database.select(statement);
        List<Item> resultList = new ArrayList<>();

        while (items.next()){
            Item item = new Item(
                    items.getInt("itemID"),
                    items.getString("itemName"),
                    items.getString("itemDescription"),
                    items.getDouble("itemPrice"),
                    items.getString("itemImage"),
                    items.getString("itemType"),
                    items.getInt("itemAnimatorID")
            );

            resultList.add(item);
        }


        return resultList;
    }

    public List<Item> getAllItems() {
//        try {
//            query = "SELECT * FROM Send_Time;";
//            statement = database.prepareStatement(query);
//
//            return selectItems(statement);
//        }
//        catch (SQLException e) {
//            throw new RuntimeException(e);
//        }
        Item item1 = new Item(1, "The Odd 1s Out Book", "Description", 20.0, "https://cdn.shopify.com/s/files/1/0033/1762/8983/products/Book_720x.jpg?v=1529191180", "Boek", 1);
        Item item2 = new Item(2, "Ari Plush", "Description2", 14.0, "https://cdn.shopify.com/s/files/1/0034/0590/6035/products/Plush1_590x.jpg?v=1535989539", "Plush", 2);
        List temporaryList = new ArrayList();
        temporaryList.add(item1);
        temporaryList.add(item2);
        return temporaryList;
    }
}
