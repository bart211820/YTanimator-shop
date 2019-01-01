package nl.hsleiden.resource;

import com.fasterxml.jackson.annotation.JsonView;
import com.google.inject.Singleton;
import nl.hsleiden.View;
import nl.hsleiden.model.Item;
import nl.hsleiden.service.ItemService;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Collection;

@Singleton
@Path("/items")
@Produces(MediaType.APPLICATION_JSON)
public class ItemResource {

    private final ItemService service;

    @Inject
    public ItemResource(ItemService service)
    {
        this.service = service;
    }

    @GET
    @JsonView(View.Public.class)
    public Collection<Item> retrieveAll()
    {
        return service.getAll();
    }
}