package nl.hsleiden.resource;

import com.fasterxml.jackson.annotation.JsonView;
import com.google.inject.Singleton;
import nl.hsleiden.View;
import nl.hsleiden.model.Basket;
import nl.hsleiden.model.Order;
import nl.hsleiden.service.BasketService;
import nl.hsleiden.service.OrderService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Collection;

@Singleton
@Path("/orders")
@Produces(MediaType.APPLICATION_JSON)
public class OrderResource {

    private final OrderService service;

    @Inject
    public OrderResource(OrderService service)
    {
        this.service = service;
    }

    @GET
    @JsonView(View.Public.class)
    public Collection<Order> retrieveAll()
    {
        return service.getAll();
    }

    @GET
    @Path("/{orderID}")
    @JsonView(View.Public.class)
    public Order retrieve(@PathParam("orderID") int orderID)
    {
        return service.getOne(orderID);
    }

    @GET
    @Path("/from/{userID}")
    @JsonView(View.Public.class)
    public Collection<Order> retrieveFromUser( int userID) { return service.getOrdersFromUser(userID); }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Protected.class)
    public void create(Order order)
    {
        service.create(order);
    }

    @DELETE
    @Path("/{orderID}")
    public void delete(@PathParam("orderID") int id)
    {
        service.delete(id);
    }

    @DELETE
    @Path("/from/{orderUserID}")
    public void deleteFromUser(@PathParam("orderUserID") int id)
    {
        service.deleteFromUser(id);
    }
}
