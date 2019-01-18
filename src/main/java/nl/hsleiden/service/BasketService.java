package nl.hsleiden.service;

import nl.hsleiden.model.Animator;
import nl.hsleiden.model.Basket;
import nl.hsleiden.model.Order;
import nl.hsleiden.persistence.BasketDAO;
import nl.hsleiden.persistence.OrderDAO;

import javax.inject.Inject;
import java.util.Collection;

public class BasketService {

    private final BasketDAO dao;

    @Inject
    public BasketService(BasketDAO dao)
    {
        this.dao = dao;
    }

    public Collection<Basket> getAll() { return dao.getAllBaskets(); }

    public Basket getOne(int orderID){
        return dao.getBasket(orderID);
    }

    public Collection<Basket> getBasketsFromUser(int userID)
    {
        return dao.getBasketsFromUser(userID);
    }

    public void create(Basket basket) {
        dao.createBasket(basket.getBaskedUserID(), basket.getBaskedItemID(), basket.getBaskedItemAmount());
    }

    public void delete(int basketID) { dao.deleteBasket(basketID); }

    public void deleteFromUser(int basketUserID) { dao.getBasketsFromUser(basketUserID); }
}
