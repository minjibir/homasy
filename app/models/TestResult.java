package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

public class TestResult extends Model {
    @Id
    public Long testRequestId;

    @NotNull
    public Long consultationId;

    @NotNull
    public Long patientId;

    @NotNull
    public Long doctorId;
    public Long testResultId;

    @NotNull
    public String[] testsRequested;

    @WhenCreated
    public LocalDateTime dateTimeRecorded;

    public static Finder<Long, TestResult> find = new Finder<Long, TestResult>(TestResult.class);

}
