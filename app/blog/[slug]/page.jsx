export default function Page({ params }) {
  return (
    <div>
      <h1 className="font-bold text-center">My Post : {params.slug} </h1>
    </div>
  );
}
