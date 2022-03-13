import prisma from "../../lib/prisma";

export default async (req, res) => {
  let result;

  try {
    const { title, definition, userId } = req.body;
    console.log(title, definition, userId);
    const submission = await prisma.word.create({
      data: {
        title: title,
        meaning: definition,
        authorId: userId,
      },
    });

    result = true;
  } catch (error) {
    console.error(error);

    result = false;
  }

  return res.status(200).json({ success: result });
};
