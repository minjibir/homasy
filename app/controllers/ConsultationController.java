package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.UUID;

import models.Consultation;

public class ConsultationController extends Controller {

    @BodyParser.Of(BodyParser.Json.class)
    public Result saveConsultation() {
        JsonNode jsonNode = request().body().asJson();

        System.out.println(Json.toJson(jsonNode));

//        Consultation iConsultation;
//
//        iConsultation = Json.fromJson(jsonNode, Consultation.class);
//        iConsultation.save();

        return created(Json.toJson("Created"));
    }

    public Result getAllConsultationByPatientId(String patientId) {
        return ok(Json.toJson(Consultation.find.all()));
    }

    public Result getConsultationByConIdAndPatId(String conId, String patId) {
        return ok(Json.toJson(Consultation.find.byId(UUID.fromString(conId))));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updateConsultation() {
        JsonNode jsonNode = request().body().asJson();
        Consultation iConsultation;

        iConsultation = Json.fromJson(jsonNode, Consultation.class);

        if (Consultation.find.byId(iConsultation.consultationId) != null) {
            iConsultation.update();
            return ok(Json.toJson("Updated!"));
        }

        return notFound(Json.toJson("Not found"));
    }

//    public Result deleteConsultation(String id) {
//        if (Consultation.find.byId(UUID.fromString(id)).delete())
//            return ok(Json.toJson("Deleted!"));
//
//        return notFound(Json.toJson("Not found!"));
//    }
}
