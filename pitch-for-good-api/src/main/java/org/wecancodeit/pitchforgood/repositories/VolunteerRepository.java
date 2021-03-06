package org.wecancodeit.pitchforgood.repositories;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.pitchforgood.models.Project;
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.models.Volunteer;

@Repository
public interface VolunteerRepository extends CrudRepository<Volunteer, Long>{

	Volunteer findByLastName(String string);
	
	Collection<Volunteer> findAllBySkills(Skill skill);

	Volunteer findByVolUserName(String username);

	Volunteer findByVolPassword(String password);

//	Volunteer findVolunteerByProject(Project project1);

}
