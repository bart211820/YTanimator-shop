package nl.hsleiden.service;

import nl.hsleiden.model.Item;
import nl.hsleiden.persistence.ItemDAO;

import javax.inject.Inject;
import java.util.Collection;

public class ItemService {

    private final ItemDAO dao;

    @Inject
    public ItemService(ItemDAO dao)
    {
        this.dao = dao;
    }

    public Collection<Item> getAll()
    {
        return dao.getAllItems();
    }

    public Item getOne(int itemID){
        return dao.getItem(itemID);
    }

}
