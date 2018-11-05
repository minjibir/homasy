package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.UUID;

import models.Prescription;

public class PrescriptionController extends Controller {

    @BodyParser.Of(BodyParser.Json.class)
    public Result createPrescription() {
        JsonNode jsonNode = request().body().asJson();
        Prescription iPrescription;

        iPrescription = Json.fromJson(jsonNode, Prescription.class);
        iPrescription.save();

        return created(Json.toJson("Created"));
    }

    public Result getAllPrescriptions() {
        return ok(Json.toJson(Prescription.find.all()));
    }

    public Result getPrescription(Long id) {
        return ok(Json.toJson(Prescription.find.byId((id))));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updatePrescription() {
        JsonNode jsonNode = request().body().asJson();
        Prescription iPrescription;

        iPrescription = Json.fromJson(jsonNode, Prescription.class);

        if (Prescription.find.byId(iPrescription.prescriptionId) != null) {
            iPrescription.update();
            return ok(Json.toJson("Updated!"));
        }

        return notFound(Json.toJson("Not found"));
    }

    public Result deletePrescription(Long id) {
        if (Prescription.find.byId(id) != null && Prescription.find.byId(id).delete()) {
            return ok(Json.toJson("Deleted!"));
        }

        return notFound(Json.toJson("Not found!"));
    }
}
