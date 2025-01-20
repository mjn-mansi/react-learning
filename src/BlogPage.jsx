import { useParams } from "react-router-dom";
import Blog from "./components/Blog";

function BlogPage() {
    const { username } = useParams();

    const tags = ["Maths", "Statistics"];
    const user = {
        name: "Michale",
        position: "CTO"
    }

    return <>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog {username}</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>

                <div className="flex">
                    <Blog title="Boost your conversion rate" description="Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta." tags={tags} userInfo={user} />

                    <Blog title="Boost your Maths  Skill" description="Illo sint voluptas. Error voluptates culpa eligendi. Hic vel nulla deserunt vel. Iusto corrupti dicta." tags={["Science"]} userInfo={{ name: "Rahul", position: "Manager" }} />
                </div>

            </div>
        </div>
    </>
}

export default BlogPage;