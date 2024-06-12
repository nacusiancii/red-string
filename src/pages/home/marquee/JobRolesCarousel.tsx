import "./JobRolesCarouselStyles.css";
import sparkle from "../../../assets/sparkle.png";
import { useEffect, useMemo, useRef } from "react";

interface JobRolesCarouselProps {}

interface JobRole {
  id: number;
  title: string;
}

const JobRolesCarousel: React.FC<JobRolesCarouselProps> = () => {
  const jobRoles: JobRole[] = useMemo(
    () => [
      { id: 1, title: "Software Developer" },
      { id: 2, title: "Data Scientist" },
      { id: 3, title: "DevOps Engineer" },
      { id: 4, title: "Systems Analyst" },
      { id: 5, title: "UI/UX Design" },
      { id: 6, title: "Fullstack Developer" },
      { id: 7, title: "Software Developer" },
      { id: 8, title: "Data Scientist" },
      { id: 9, title: "DevOps Engineer" },
      { id: 10, title: "Systems Analyst" },
      { id: 11, title: "UI/UX Design" },
      { id: 12, title: "Fullstack Developer" },
    ],
    []
  );

  const totalJobRoles: number = jobRoles.length;

  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container) return;
    const roleElements = Array.from(container.children).filter(
      (child): child is HTMLElement => child !== null
    );
    const roleWidth = 350; // Assuming fixed width of 350px from CSS
    const visibleRoles = totalJobRoles - 1; // Calculate visible roles

    const animate = () => {
      roleElements.forEach((role, index) => {
        const left = parseInt(role.style.left, 10);
        if (left <= -roleWidth) {
          // Move the role element to the right of the visible roles
          role.style.left = `${visibleRoles * (roleWidth + 10)}px`;
          container.appendChild(role);
        } else {
          // Move the role element to the left
          role.style.left = `${left - 2}px`;
        }
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Position role elements initially
    let currentX = 0;
    roleElements.forEach((role) => {
      role.style.left = `${currentX}px`;
      currentX += roleWidth + 10;
    });

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  });

  return (
    <div
      className="flex-row align-center job-roles-carousel"
      ref={carouselContainerRef}
    >
      {jobRoles.map((role) => (
        <div key={role.id} className="job-role">
          <span>{role.title}</span>
          <img src={sparkle} alt="Sparkle" className="sparkle" />
        </div>
      ))}
    </div>
  );
};

export default JobRolesCarousel;

// useEffect(() => {
//   const container = containerRef.current;
//   if (!container) return;
//   const roleElements = Array.from(container.children).filter(
//     (child): child is HTMLElement => child !== null
//   );

//   const roleWidths = roleElements.map(
//     (role) => role.getBoundingClientRect().width
//   );
//   const containerWidth = container.getBoundingClientRect().width;
//   const initialX = containerWidth;

//   roleElements.forEach((role, index) => {
//     role.style.left = `${initialX + index * (roleWidths[index] + 10)}px`;
//   });

//   //const totalWidth = roleWidths.reduce((sum, width) => sum + width + 10, 0);
//   const visibleRoles = Math.ceil(containerWidth / (roleWidths[0] + 10));

//   const animate = () => {
//     roleElements.forEach((role, index) => {
//       const left = parseInt(role.style.left, 10);
//       if (left <= -roleWidths[index]) {
//         role.style.left = `${
//           parseInt(roleElements[visibleRoles - 1].style.left, 10) +
//           roleWidths[visibleRoles - 1] +
//           10
//         }px`;
//         container.appendChild(role);
//       } else {
//         role.style.left = `${left - 2}px`;
//       }
//     });

//     animationFrameRef.current = requestAnimationFrame(animate);
//   };

//   animationFrameRef.current = requestAnimationFrame(animate);

//   return () => {
//     if (animationFrameRef.current) {
//       cancelAnimationFrame(animationFrameRef.current);
//     }
//   };
// }, [jobRoles]);
