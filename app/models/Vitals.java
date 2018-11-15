package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.WhenModified;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Optional;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "vitals")
public class Vitals extends Model {

    @Id
    public Long vitalId;

    @NotNull
    public Long patientId;

    public String bloodPressure;

    public String pulseRate;

    public String temperature;

    public Long weight;

    public int height;

    @WhenModified
    public LocalDateTime dateTaken;

    public static Finder<Long, Vitals> find = new Finder<>(Vitals.class);

    public static List<Vitals> findByPatient(Long patientId) {
        return Vitals.find
        .query()
        .where()
        .eq("patient_id", patientId)
        .findList();
    }
}
