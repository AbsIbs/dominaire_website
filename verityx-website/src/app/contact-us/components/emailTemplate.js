const EmailTemplate = ({
  name,
  email,
  organisation,
  website,
  categories,
  message,
}) => {
  return (
    <div>
      <p className="font-medium">Name: {name}</p>
      <p className="font-medium">Email: {email}</p>
      <p className="font-medium">Organisation: {organisation}</p>
      <p className="font-medium">Website: {website}</p>
      <p className="font-medium">Categories: {categories.join(", ")}</p>
      <p className="font-medium">Message: {message}</p>
    </div>
  );
};

export default EmailTemplate;
