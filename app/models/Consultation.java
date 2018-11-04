package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "sessions")
public class Consultation extends Model {

    @Id
    public UUID consultationId;

    //@NotNull
    public UUID appointmentId;

    @NotNull
    public UUID patientId;

    //@NotNull
    public UUID doctorId;

    @NotNull
    public String statement; // This is the patient statement about what is bothering him.

    public String testtypes;

    @NotNull
    public String diagnosis;

    @NotNull
    public String prescription;

    //@NotNull
    @WhenCreated
    public LocalDateTime sessionDateTime;

    public static Finder find = new Finder<UUID, Consultation>(Consultation.class);
}
