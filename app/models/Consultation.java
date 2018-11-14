package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


@Entity
@Table(name = "sessions")
public class Consultation extends Model {
    
    @Id
    public long consultationId;
    
    @NotNull
    public long patientId;
    
    @NotNull
    public long doctorId;

    @NotNull
    public String complaint;

    public String investigation;

    public String findings;

    public String diagnosis;
    
    @WhenCreated
    public LocalDate consultationDate;

    public static Finder find = new Finder<Long, Consultation>(Consultation.class);
}
