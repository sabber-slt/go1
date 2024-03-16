import PocketBase from "pocketbase";
// initialise client
export const pb = new PocketBase("https://server.sabber.dev");

export async function getHome() {
  try {
    const resultList = await pb.collection("blogs").getList(1, 6, {
      sort: "-created,id",
    });
    const home = await pb.collection("main").getList(1, 5, {
      sort: "created,id",
      expand: "item",
    });

    return { home: home?.items[0]?.expand, blogs: resultList.items };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function getAbout() {
  try {
    const resultList = await pb.collection("main").getList(1, 50, {
      sort: "created,id",
      filter: `id="sw7fxl31k1j59ra"`,
      expand: "item",
    });

    return resultList?.items[0].expand;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function getBlog(blog_id: string) {
  try {
    const resultList = await pb.collection("blogs").getList(1, 50, {
      sort: "created,id",
      filter: `link="${blog_id}"`,
      expand: "blog_item",
    });

    return resultList?.items;
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function getBlogs() {
  try {
    const resultList = await pb.collection("blogs").getList(1, 50, {
      sort: "created,id",
    });

    return resultList?.items;
  } catch (error: any) {
    return { error: error.message };
  }
}
