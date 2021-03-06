package org.wecancodeit.pitchforgood.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.pitchforgood.models.Cause;

@Repository
public interface CauseRepository extends CrudRepository<Cause, Long>{

	Cause findByCauseName(String string);

}
