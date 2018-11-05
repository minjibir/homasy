package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.TestResult;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;


public class TestResultController extends Controller {

    @BodyParser.Of(BodyParser.Json.class)
    public Result createTestResult() {
        JsonNode jsonNode = request().body().asJson();
        TestResult iTestResult;

        iTestResult = Json.fromJson(jsonNode, TestResult.class);
        iTestResult.save();

        return created(Json.toJson("Created"));
    }

    public Result getAllTestResults() {
        return ok(Json.toJson(TestResult.find.all()));
    }

    public Result getTestResult(Long testRequestId) {
        return ok(Json.toJson(TestResult.find.byId(testRequestId)));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result updateTestResult() {
        JsonNode jsonNode = request().body().asJson();
        TestResult iTestResult;

        iTestResult = Json.fromJson(jsonNode, TestResult.class);

        if (TestResult.find.byId(iTestResult.testRequestId) != null) {
            iTestResult.update();
            return ok(Json.toJson("Updated!"));
        }

        return notFound(Json.toJson("Not found"));
    }

    public Result deleteTestResult(Long testRequestId) {
        if (TestResult.find.byId(testRequestId) != null && TestResult.find.byId(testRequestId).delete())
            return ok(Json.toJson("Deleted!"));

        return notFound(Json.toJson("Not found!"));
    }
}
