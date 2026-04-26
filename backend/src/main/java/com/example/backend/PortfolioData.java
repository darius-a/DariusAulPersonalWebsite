package com.example.backend;

import java.util.List;

public class PortfolioData {

    public record Project(
        String num,
        String img,
        String title,
        String desc,
        List<String> awards
    ) {}

    public record Experience(
        String title,
        String org,
        String date,
        List<String> bullets,
        List<String> tags
    ) {}

    public record Hobby(
        String img,
        String title,
        String desc
    ) {}

    public static final List<Project> PROJECTS = List.of(
        new Project(
            "01",
            "ecosentry.jpg",
            "ECOSENTRY",
            "Co-founded a startup developing solar-powered acoustic sensors with a TensorFlow audio classifier to detect poaching in wildlife reserves. Built the model, prototyped field hardware via CNC routing and 3D printing, and led outreach to 10+ African wildlife parks.",
            List.of(
                "Toronto Science Fair — Silver Medal",
                "1517 Fund Medici Grant — $1,000 USD",
                "$5,000 CAD Prototyping Award",
                "Top 7% of 12,000+ Global Pitches"
            )
        ),
        new Project(
            "02",
            "bdc.jpg",
            "BIG DATA CHALLENGE",
            "2025: Co-developed a DBSCAN clustering algorithm to optimize mental health facility placement in Toronto — presented at Microsoft HQ, won $1,000. 2026: Modelled climate change effects on wheat yields, presented to the Lieutenant Governor of Ontario, won 2nd Best Poster ($800).",
            List.of(
                "2025 — Top 8 of 500+ Teams, $1,000 Prize",
                "2026 — 2nd Best Poster, $800 Prize"
            )
        ),
        new Project(
            "03",
            "frc.jpg",
            "FRC STRATEGY — TEAM 610",
            "Developed scoring models and alliance selection frameworks for one of Canada's top FRC teams, using data analysis from the 150-page competition rulebook. Team reached finals at North Bay and Centennial College District Events.",
            List.of("District Finalist — North Bay & Centennial")
        ),
        new Project(
            "04",
            "ethics.jpg",
            "ETHICS BOWL",
            "Led my school's team to an undefeated performance at the UofT regional qualifiers in Grade 11. The Ethics Bowl tests your reasoning skills: participants argue their actual position, and are evaluated on quality of thinking rather than how persuasive they are.",
            List.of("Undefeated — UofT Regional Qualifiers")
        )
    );

    public static final List<Experience> EXPERIENCE = List.of(
        new Experience(
            "CO-FOUNDER",
            "EcoSentry",
            "Nov 2023 — Dec 2025",
            List.of(
                "Built a TensorFlow CNN audio classifier to distinguish threat sounds from ambient noise, with a multilateration module for real-time location approximation",
                "Pitched at four competitions, securing $6,000+ in funding; coordinated with incubators to advance prototyping",
                "Prototyped solar-powered field hardware using CNC routing and 3D printing",
                "Conducted outreach to 10+ major African wildlife parks including executives at the world's largest rhino sanctuary",
                "Received mentorship from Prof. Rob Maher (audio forensics, Montana State) and a Paul Allen Institute for AI executive"
            ),
            List.of("TensorFlow", "Python", "Audio ML", "Hardware", "Fundraising")
        ),
        new Experience(
            "PRESIDENT",
            "Public Speaking & Ethics Bowl Club — Crescent School",
            "Sep 2025 — Present",
            List.of(
                "Lead a 40+ member club focused on argumentation, critical thinking, and structured dialogue",
                "Prepare and deliver weekly lessons and practice sessions for members at all levels",
                "Manage a team of 3 assistant executives and plan the club calendar",
                "Selected as president following an undefeated team run at UofT regional qualifiers in Grade 11"
            ),
            List.of("Leadership", "Ethics Bowl", "Public Speaking")
        ),
        new Experience(
            "CEO + CO-HEAD, BUSINESS TEAM",
            "Crescent School Entrepreneurship Club",
            "Sep 2025 — Present",
            List.of(
                "CEO of the ~60-member Entrepreneurship Club; one of three Co-Heads of the ~250-member Business Team (Entrepreneurship, Investment, and DECA subteams)",
                "Deliver bi-weekly presentations on entrepreneurship drawing from the Disciplined Entrepreneurship textbook and firsthand experience",
                "Organize a bi-weekly guest speaker series — 10+ sessions planned, 6 completed"
            ),
            List.of("Leadership", "Strategy", "Entrepreneurship")
        ),
        new Experience(
            "JUNIOR STRATEGY EXECUTIVE",
            "FRC Team 610: The Coyotes",
            "Sep 2024 — May 2025",
            List.of(
                "Nominated as Junior Strategy Executive after two years on the design and manufacturing subteam",
                "Built scoring models in Google Sheets from the 150-page competition rulebook",
                "Led alliance selection analysis across district events; team reached finals at North Bay and Centennial"
            ),
            List.of("Data Analysis", "Robotics", "Strategy")
        ),
        new Experience(
            "TEACHING ASSISTANT",
            "Spirit of Math Schools",
            "Oct 2023 — Jun 2025",
            List.of(
                "Supported students in an accelerated mathematics program through one-on-one tutoring and assignment grading"
            ),
            List.of("Mathematics", "Teaching")
        )
    );

    public static final List<Hobby> HOBBIES = List.of(
        new Hobby(
            "piano.jpg",
            "PIANO",
            "Twelve years of classical training. Completed RCM Level 9 with First Class Honours (85%) and currently working on RCM Level 10. Outside of RCM, i've self-taught blues and jazz improvisation."
        ),
        new Hobby(
            "swimming.jpg",
            "SWIMMING",
            "National Lifeguard (Pool) Certified and Swim Instructor Certified through the Lifesaving Society of Canada. Also hold Standard First Aid with CPR-C. Previously having done competitive swimming, I currently hold a swim instructor role."
        ),
        new Hobby(
            "reading.jpg",
            "READING",
            "Reading list - coming soon"
        )
    );
}