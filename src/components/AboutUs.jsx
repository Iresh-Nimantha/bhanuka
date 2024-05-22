import React from "react";
import {
  Typography,
  Card,
  CardBody,
  Avatar,
  Button,
} from "@material-tailwind/react";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    bio: "John is the visionary behind our company, leading us with his extensive experience in the tech industry.",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    bio: "Jane is responsible for overseeing the development of our cutting-edge technology.",
  },
  {
    name: "Alice Johnson",
    position: "CFO",
    image:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    bio: "Alice manages our financial strategy and operations, ensuring we are on a solid financial footing.",
  },
];

function AboutUs() {
  return (
    <div className="container mx-auto m-8 px-4 py-16 rounded-lg shadow-xl  to-green-100">
      <section
        id="AboutUs"
        className="mb-12 text-center shadow-xl rounded-xl p-4"
      >
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 text-green-900 font-extrabold "
        >
          About Us
        </Typography>
        <Typography
          variant="lead"
          color="blue-gray"
          className="mb-8 text-gray-700"
        >
          Learn more about our mission, vision, and the team that drives our
          success.
        </Typography>
      </section>

      <section className="mb-12 shadow-lg rounded-xl p-4 transform transition-transform duration-9000 ease-in hover:scale-105">
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-4 text-gray-900 font-bold"
        >
          Our Mission
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="text-gray-700"
        >
          Our mission is to provide innovative solutions that empower businesses
          to achieve their goals. We strive to create products that enhance
          productivity, foster collaboration, and drive success.
        </Typography>
      </section>

      <section className="mb-12 shadow-lg rounded-xl p-4 transform transition-transform duration-9000 ease-in hover:scale-105">
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-4 text-gray-900 font-bold"
        >
          Our Vision
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="text-gray-700"
        >
          We envision a world where technology seamlessly integrates with daily
          life, enabling people to focus on what truly matters. Our vision is to
          be at the forefront of this transformation, leading the way with
          cutting-edge solutions.
        </Typography>
      </section>

      <section className="mb-12">
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-8 text-center text-gray-900 font-bold"
        >
          Meet the Team
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white rounded-lg"
            >
              <CardBody className="text-center p-6">
                <Avatar
                  src={member.image}
                  alt={member.name}
                  size="xl"
                  className="mx-auto mb-4"
                />
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-gray-900 font-semibold"
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-gray-600"
                >
                  {member.position}
                </Typography>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="text-gray-700"
                >
                  {member.bio}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-4 text-gray-900 font-bold"
        >
          Join Us
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-8 text-gray-700"
        >
          We are always looking for talented individuals to join our team. If
          you are passionate about technology and innovation, we would love to
          hear from you.
        </Typography>
        <Button
          variant="gradient"
          color="blue"
          size="lg"
          className="transform transition-transform duration-300 hover:scale-105"
        >
          Contact Us
        </Button>
      </section>
    </div>
  );
}

export default AboutUs;
