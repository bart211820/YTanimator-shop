package nl.hsleiden.resource;

import com.fasterxml.jackson.annotation.JsonView;
import com.google.inject.Singleton;
import nl.hsleiden.View;
import nl.hsleiden.model.Animator;
import nl.hsleiden.model.Item;
import nl.hsleiden.service.AnimatorService;
import nl.hsleiden.service.ItemService;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Collection;

@Singleton
@Path("/animators")
@Produces(MediaType.APPLICATION_JSON)
public class AnimatorResource {

    private final AnimatorService service;

    @Inject
    public AnimatorResource(AnimatorService service)
    {
        this.service = service;
    }

    @GET
    @JsonView(View.Public.class)
    public Collection<Animator> retrieveAll()
    {
        return service.getAll();
    }

    @GET
    @Path("/{animatorID}")
    @JsonView(View.Public.class)
    public Animator retrieve(@PathParam("animatorID") int animatorID)
    {
        return service.getOne(animatorID);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Protected.class)
    public void create(Animator animator)
    {
        service.create(animator);
    }

    @DELETE
    @Path("/{animatorID}")
    public void delete(@PathParam("animatorID") int id)
    {
        service.delete(id);
    }
}
