package models;

import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Optional;

@Entity
@Table(name = "staff")
public class Staff extends Model {
    
    @Id
    public Long uuid;

    @NotNull
    public String firstName;

    @NotNull
    public String lastName;

    @NotNull
    public String unit;

    @Column(nullable = false, unique = true)
    public String username;

    @NotNull
    public String password;

    public static Finder<Long, Staff> find = new Finder<>(Staff.class);

    public static Optional<Staff> findByUsernameAndPassword(String username, String password) {
        return Staff.find
                .query()
                .where()
                .eq("username", username)
                .eq("password", password)
                .findOneOrEmpty();
    }
}
