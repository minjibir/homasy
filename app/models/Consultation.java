package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;


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
    public LocalDateTime consultationDate;

    public static Finder find = new Finder<Long, Consultation>(Consultation.class);

    public static List<Consultation> findByPatient(Long patientId) {
        return Consultation.find
        .query()
        .where()
        .eq("patient_id", patientId)
        .findList();
    }
}
