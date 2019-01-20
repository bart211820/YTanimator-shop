package nl.hsleiden.resource;

import com.fasterxml.jackson.annotation.JsonView;
import com.google.inject.Singleton;
import nl.hsleiden.View;
import nl.hsleiden.model.Basket;
import nl.hsleiden.service.BasketService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Collection;

@Singleton
@Path("/baskets")
@Produces(MediaType.APPLICATION_JSON)
public class BasketResource {

    private final BasketService service;

    @Inject
    public BasketResource(BasketService service)
    {
        this.service = service;
    }

    @GET
    @JsonView(View.Public.class)
    public Collection<Basket> retrieveAll()
    {
        return service.getAll();
    }

    @GET
    @Path("/{basketID}")
    @JsonView(View.Public.class)
    public Basket retrieve(@PathParam("basketID") int basketID)
    {
        return service.getOne(basketID);
    }

    @GET
    @Path("/from/{userID}")
    @JsonView(View.Public.class)
    public Collection<Basket> retrieveFromUser(@PathParam("userID") int userID) { return service.getBasketsFromUser(userID); }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Protected.class)
    public void create(Basket basket)
    {
        service.create(basket);
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Protected.class)
    public void update(@PathParam("id") int id, Basket basket)
    {
        service.update(id, basket);
    }

    @DELETE
    @Path("/{basketID}")
    public void delete(@PathParam("basketID") int id)
    {
        service.delete(id);
    }

    @DELETE
    @Path("/from/{basketUserID}")
    public void deleteFromUser(@PathParam("basketUserID") int id)
    {
        service.deleteFromUser(id);
    }
}
