package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Patient;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.UUID;

public class PatientController extends Controller {
    public static Result deleteAppointment(String id) {
        return play.mvc.Results.TODO;
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result registerPatient() {
        JsonNode jsonNode = request().body().asJson();

        System.out.println(Json.toJson(jsonNode));

        try {
            Patient patient = Json.fromJson(jsonNode, Patient.class);
            patient.save();
            return created(Json.toJson(patient));

        } catch (Exception e) {
            e.printStackTrace();
        }

        return notFound("Not found.");
    }

    public Result getPatientById(String patientUUID) {
        Patient patient = Patient.find.byId(UUID.fromString(patientUUID));
        if (patient != null) return ok(Json.toJson(patient));

        return notFound("Not found");
    }

    public Result getAllPatients() {
        return ok(Json.toJson(Patient.find.all()));
    }

    public Result updatePatient() {
        return play.mvc.Results.TODO;
    }

    public Result deletePatient(String id) {
        return play.mvc.Results.TODO;
    }
}
