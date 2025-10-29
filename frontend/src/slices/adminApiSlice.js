import { apiSlice } from "./apiSlice";

const ADMIN_URL = "/admin";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Admin Login
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: `${ADMIN_URL}/login`,
        method: "POST",
        body: credentials,
      }),
    }),

    // ✅ Get all messages
    getAllMessages: builder.query({
      query: () => ({
        url: `${ADMIN_URL}/messages`, // changed `/message` → `/messages`
        method: "GET",
      }),
    }),

    // ✅ Get a single message
    getMessage: builder.query({
      query: (id) => ({
        url: `${ADMIN_URL}/messages/${id}`, // added missing slash and plural
        method: "GET",
      }),
    }),

    // ✅ Delete message
    deleteMessage: builder.mutation({
      query: (messageId) => ({
        url: `${ADMIN_URL}/messages/${messageId}`,
        method: "DELETE",
      }),
    }),

    // ✅ Admin Logout
    adminLogout: builder.mutation({
      query: () => ({
        url: `${ADMIN_URL}/logout`,
        method: "POST",
      }),
    }),

    markAsRead: builder.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/messages/${id}/read`,
        method: "PUT",
      }),
    }),

    //upload projects
    uploadProjects: builder.mutation({
      query: () => ({
        url: `${ADMIN_URL}/upload`,
        method: "POST",
      })
    }),

    //fetch projects
    fetchProjects: builder.query({
      query: () => ({
        url: `${ADMIN_URL}/project`,
        method: "GET",
      })
    }),

    //Edit projects
    editProject: builder.mutation({
      query: (project) => ({
        url: `${ADMIN_URL}/projects/${project.id}`,
        method: "PUT",
        body: project,
      })
    }),
    //Delete projects
    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `${ADMIN_URL}/projects/${projectId}`,
        method: "DELETE",
      })
    })
  }),
});

export const {
  useAdminLoginMutation,
  useGetAllMessagesQuery,
  useGetMessageQuery,
  useDeleteMessageMutation,
  useAdminLogoutMutation,
  useMarkAsReadMutation,
  useUploadProjectsMutation,
  useFetchProjectsQuery,
  useEditProjectMutation,
  useDeleteProjectMutation
} = adminApiSlice;
