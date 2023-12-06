package Nrprap.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Nrprap.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Прикол
 */
@Entity(name = "IISNrprapПрикол")
@Table(schema = "public", name = "Прикол")
public class Prikol {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Строка")
    private String строка;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klass")
    @Convert("Klass")
    @Column(name = "Класс", length = 16, unique = true, nullable = false)
    private UUID _klassid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klass", insertable = false, updatable = false)
    private Klass klass;


    public Prikol() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСтрока() {
      return строка;
    }

    public void setСтрока(String строка) {
      this.строка = строка;
    }


}