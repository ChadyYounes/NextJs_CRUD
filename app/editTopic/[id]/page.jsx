import EditTopicForm from "@/components/EditTopicForm";
import axios from "axios";

const getTopicById = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/topics/${id}`);
  return res.data;
};
const EditTopic = async ({ params }) => {
  const { id } = params;
  const { title, description } = await getTopicById(id);

  console.log("Fetched Topic:", { title, description }); // Add this line for debugging

  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
