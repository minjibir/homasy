package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.UUID;

import models.Appointment;
import play.mvc.Results;

public class AppointmentController extends Controller {

    @BodyParser.Of(BodyParser.Json.class)
    public Result makeAppointment() {
        JsonNode jsonNode = request().body().asJson();
        Appointment iAppointment;

        iAppointment = Json.fromJson(jsonNode, Appointment.class);
        iAppointment.save();

        return created(Json.toJson("Created"));
    }

    public Result getAllAppointments() {
        return ok(Json.toJson(Appointment.find.all()));
    }

    public Result getAppointmentById(String id) {
        return ok(Json.toJson(Appointment.find.byId(UUID.fromString(id))));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updateAppointment() {
        JsonNode jsonNode = request().body().asJson();
        Appointment iAppointment;

        iAppointment = Json.fromJson(jsonNode, Appointment.class);

        if (Appointment.find.byId(iAppointment.appointmentId) != null) {
            iAppointment.update();
            return ok(Json.toJson("Updated!"));
        }

        return notFound(Json.toJson("Not found"));
    }

    public Result deleteAppointment(String appointmentId) {

//        if (Appointment.find.byId(UUID.fromString(appointmentId)).delete())
//            return ok(Json.toJson("Deleted!"));
//
//        return notFound(Json.toJson("Not found!"));
        return Results.TODO;
    }
}
