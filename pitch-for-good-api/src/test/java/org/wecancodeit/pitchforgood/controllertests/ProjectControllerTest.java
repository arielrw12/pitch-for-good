package org.wecancodeit.pitchforgood.controllertests;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import java.util.Arrays;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.wecancodeit.pitchforgood.controllers.ProjectController;
import org.wecancodeit.pitchforgood.controllers.SkillController;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;
import org.wecancodeit.pitchforgood.repositories.CauseRepository;
import org.wecancodeit.pitchforgood.repositories.OrganizationRepository;
import org.wecancodeit.pitchforgood.repositories.ProjectRepository;
import org.wecancodeit.pitchforgood.repositories.SkillRepository;
import org.wecancodeit.pitchforgood.repositories.VolunteerRepository;

@RunWith(SpringRunner.class)
@WebMvcTest(ProjectController.class)
public class ProjectControllerTest {
	
	@Autowired
	private WebApplicationContext context;
	@Autowired
    private MockMvc mvc;
 
    @MockBean
    private SkillRepository skillRepo;
    @MockBean
    private VolunteerRepository volunteerRepo;
    @MockBean
    private ProjectRepository projectRepo;
    @MockBean
    private CauseRepository causeRepo;
    @MockBean
    private OrganizationRepository orgRepo;
    
    @InjectMocks
    private SkillController skillController;

    public void setup() {
    	this.mvc = MockMvcBuilders.webAppContextSetup(context).build();
    }
    
    @Test
	public void givenProjects_whenGetProjects_thenReturnJsonArray()
	  throws Exception { 
    	Organization org = new Organization("","","","","","", null, null);
    	Project project = new Project("","","", org, null);
    	List<Project> allProjects = Arrays.asList(project);
    	given(projectRepo.findAll()).willReturn(allProjects);
    	mvc.perform(get("/projects/")
    		.contentType(MediaType.APPLICATION_JSON))
    		.andExpect(status().isOk())
    		.andExpect(jsonPath("$", hasSize(1)))
    		.andExpect(jsonPath("$[0].projectName", is(project.getProjectName())));
}
}
