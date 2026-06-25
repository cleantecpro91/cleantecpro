import {
  pgTable,
  text,
  varchar,
  integer,
  boolean,
  timestamp,
  decimal,
  jsonb,
  uuid,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ─── Users (Customers) ───────────────────────────────────────────
export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    firstName: varchar("first_name", { length: 100 }).notNull(),
    lastName: varchar("last_name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 20 }).notNull(),
    passwordHash: text("password_hash").notNull(),
    avatarUrl: text("avatar_url"),
    emailVerified: boolean("email_verified").default(false),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("users_email_idx").on(t.email)]
);

// ─── Admins ──────────────────────────────────────────────────────
export const admins = pgTable("admins", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: varchar("role", { length: 20 }).default("admin").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ─── Categories ──────────────────────────────────────────────────
export const categories = pgTable(
  "categories",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 200 }).notNull(),
    slug: varchar("slug", { length: 200 }).notNull(),
    description: text("description"),
    icon: varchar("icon", { length: 50 }),
    imageUrl: text("image_url"),
    metaTitle: varchar("meta_title", { length: 200 }),
    metaDescription: text("meta_description"),
    sortOrder: integer("sort_order").default(0),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("categories_slug_idx").on(t.slug)]
);

// ─── Subcategories ───────────────────────────────────────────────
export const subcategories = pgTable(
  "subcategories",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    categoryId: uuid("category_id")
      .references(() => categories.id, { onDelete: "cascade" })
      .notNull(),
    name: varchar("name", { length: 200 }).notNull(),
    slug: varchar("slug", { length: 200 }).notNull(),
    description: text("description"),
    metaTitle: varchar("meta_title", { length: 200 }),
    metaDescription: text("meta_description"),
    sortOrder: integer("sort_order").default(0),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("subcategories_slug_idx").on(t.slug),
    index("subcategories_category_idx").on(t.categoryId),
  ]
);

// ─── Services ────────────────────────────────────────────────────
export const services = pgTable(
  "services",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    categoryId: uuid("category_id")
      .references(() => categories.id, { onDelete: "cascade" })
      .notNull(),
    subcategoryId: uuid("subcategory_id").references(
      () => subcategories.id,
      { onDelete: "set null" }
    ),
    name: varchar("name", { length: 300 }).notNull(),
    slug: varchar("slug", { length: 300 }).notNull(),
    shortDescription: varchar("short_description", { length: 500 }),
    description: text("description"),
    whatsIncluded: text("whats_included"),
    exclusions: text("exclusions"),
    processSteps: text("process_steps"),
    startingPrice: decimal("starting_price", { precision: 10, scale: 2 }),
    priceUnit: varchar("price_unit", { length: 50 }).default("per service"),
    durationEstimate: varchar("duration_estimate", { length: 100 }),
    imageUrl: text("image_url"),
    galleryImages: jsonb("gallery_images").$type<string[]>(),
    metaTitle: varchar("meta_title", { length: 200 }),
    metaDescription: text("meta_description"),
    keywords: text("keywords"),
    schemaMarkup: jsonb("schema_markup"),
    isFeatured: boolean("is_featured").default(false),
    isPopular: boolean("is_popular").default(false),
    sortOrder: integer("sort_order").default(0),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("services_slug_idx").on(t.slug),
    index("services_category_idx").on(t.categoryId),
    index("services_subcategory_idx").on(t.subcategoryId),
  ]
);

// ─── Emirates ────────────────────────────────────────────────────
export const emirates = pgTable(
  "emirates",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description"),
    metaTitle: varchar("meta_title", { length: 200 }),
    metaDescription: text("meta_description"),
    isPrimary: boolean("is_primary").default(false),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("emirates_slug_idx").on(t.slug)]
);

// ─── Cities ──────────────────────────────────────────────────────
export const cities = pgTable(
  "cities",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    emirateId: uuid("emirate_id")
      .references(() => emirates.id, { onDelete: "cascade" })
      .notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description"),
    metaTitle: varchar("meta_title", { length: 200 }),
    metaDescription: text("meta_description"),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("cities_slug_idx").on(t.slug),
    index("cities_emirate_idx").on(t.emirateId),
  ]
);

// ─── Areas / Locations ───────────────────────────────────────────
export const areas = pgTable(
  "areas",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    cityId: uuid("city_id")
      .references(() => cities.id, { onDelete: "cascade" })
      .notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description"),
    metaTitle: varchar("meta_title", { length: 200 }),
    metaDescription: text("meta_description"),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("areas_slug_idx").on(t.slug),
    index("areas_city_idx").on(t.cityId),
  ]
);

// ─── User Addresses ──────────────────────────────────────────────
export const addresses = pgTable("addresses", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  label: varchar("label", { length: 50 }).default("Home"),
  fullName: varchar("full_name", { length: 200 }),
  phone: varchar("phone", { length: 20 }),
  addressLine1: text("address_line1").notNull(),
  addressLine2: text("address_line2"),
  city: varchar("city", { length: 100 }),
  emirate: varchar("emirate", { length: 100 }),
  area: varchar("area", { length: 100 }),
  building: varchar("building", { length: 200 }),
  apartment: varchar("apartment", { length: 50 }),
  landmark: text("landmark"),
  isDefault: boolean("is_default").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ─── Orders ──────────────────────────────────────────────────────
export const orders = pgTable(
  "orders",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    orderNumber: varchar("order_number", { length: 20 }).notNull(),
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "set null" })
      .notNull(),
    customerName: varchar("customer_name", { length: 200 }),
    customerEmail: varchar("customer_email", { length: 255 }),
    customerPhone: varchar("customer_phone", { length: 20 }),
    serviceId: uuid("service_id").references(() => services.id, {
      onDelete: "set null",
    }),
    serviceName: varchar("service_name", { length: 300 }),
    serviceSlug: varchar("service_slug", { length: 300 }),
    addressId: uuid("address_id").references(() => addresses.id, {
      onDelete: "set null",
    }),
    addressSnapshot: jsonb("address_snapshot"),
    scheduledDate: timestamp("scheduled_date"),
    scheduledTime: varchar("scheduled_time", { length: 50 }),
    paymentMethod: varchar("payment_method", { length: 50 }).notNull(),
    paymentStatus: varchar("payment_status", { length: 30 })
      .default("pending")
      .notNull(),
    orderStatus: varchar("order_status", { length: 30 })
      .default("pending")
      .notNull(),
    subtotal: decimal("subtotal", { precision: 10, scale: 2 }).default("0"),
    tax: decimal("tax", { precision: 10, scale: 2 }).default("0"),
    discount: decimal("discount", { precision: 10, scale: 2 }).default("0"),
    total: decimal("total", { precision: 10, scale: 2 }).default("0"),
    currency: varchar("currency", { length: 3 }).default("AED"),
    notes: text("notes"),
    adminNotes: text("admin_notes"),
    vendorName: varchar("vendor_name", { length: 200 }),
    vendorPhone: varchar("vendor_phone", { length: 20 }),
    vendorAssignedAt: timestamp("vendor_assigned_at"),
    completedAt: timestamp("completed_at"),
    cancelledAt: timestamp("cancelled_at"),
    cancellationReason: text("cancellation_reason"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("orders_number_idx").on(t.orderNumber),
    index("orders_user_idx").on(t.userId),
    index("orders_status_idx").on(t.orderStatus),
  ]
);

// ─── Quote Requests ──────────────────────────────────────────────
export const quotes = pgTable(
  "quotes",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    quoteNumber: varchar("quote_number", { length: 20 }).notNull(),
    userId: uuid("user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    customerName: varchar("customer_name", { length: 200 }).notNull(),
    customerEmail: varchar("customer_email", { length: 255 }).notNull(),
    customerPhone: varchar("customer_phone", { length: 20 }).notNull(),
    serviceId: uuid("service_id").references(() => services.id, {
      onDelete: "set null",
    }),
    serviceName: varchar("service_name", { length: 300 }),
    emirate: varchar("emirate", { length: 100 }),
    city: varchar("city", { length: 100 }),
    area: varchar("area", { length: 100 }),
    propertyType: varchar("property_type", { length: 50 }),
    description: text("description"),
    preferredDate: varchar("preferred_date", { length: 50 }),
    budget: varchar("budget", { length: 100 }),
    attachmentUrls: jsonb("attachment_urls").$type<string[]>(),
    status: varchar("status", { length: 30 }).default("pending").notNull(),
    adminResponse: text("admin_response"),
    quotedAmount: decimal("quoted_amount", { precision: 10, scale: 2 }),
    adminNotes: text("admin_notes"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("quotes_number_idx").on(t.quoteNumber),
    index("quotes_user_idx").on(t.userId),
  ]
);

// ─── Invoices ────────────────────────────────────────────────────
export const invoices = pgTable("invoices", {
  id: uuid("id").defaultRandom().primaryKey(),
  invoiceNumber: varchar("invoice_number", { length: 20 }).notNull().unique(),
  orderId: uuid("order_id")
    .references(() => orders.id, { onDelete: "cascade" })
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "set null" })
    .notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  tax: decimal("tax", { precision: 10, scale: 2 }).default("0"),
  total: decimal("total", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 30 }).default("pending").notNull(),
  paidAt: timestamp("paid_at"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ─── Favorites ───────────────────────────────────────────────────
export const favorites = pgTable(
  "favorites",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    serviceId: uuid("service_id")
      .references(() => services.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("favorites_user_service_idx").on(t.userId, t.serviceId),
  ]
);

// ─── Testimonials ────────────────────────────────────────────────
export const testimonials = pgTable("testimonials", {
  id: uuid("id").defaultRandom().primaryKey(),
  customerName: varchar("customer_name", { length: 200 }).notNull(),
  customerLocation: varchar("customer_location", { length: 100 }),
  rating: integer("rating").notNull(),
  content: text("content").notNull(),
  serviceName: varchar("service_name", { length: 200 }),
  isApproved: boolean("is_approved").default(false),
  isFeatured: boolean("is_featured").default(false),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ─── FAQs ────────────────────────────────────────────────────────
export const faqs = pgTable("faqs", {
  id: uuid("id").defaultRandom().primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: varchar("category", { length: 100 }).default("general"),
  serviceId: uuid("service_id").references(() => services.id, {
    onDelete: "set null",
  }),
  sortOrder: integer("sort_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ─── Blog Posts ──────────────────────────────────────────────────
export const blogPosts = pgTable(
  "blog_posts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    title: varchar("title", { length: 300 }).notNull(),
    slug: varchar("slug", { length: 300 }).notNull(),
    excerpt: text("excerpt"),
    content: text("content").notNull(),
    featuredImage: text("featured_image"),
    imageAlt: varchar("image_alt", { length: 300 }),
    authorName: varchar("author_name", { length: 100 }).default("CleanTecPro"),
    category: varchar("category", { length: 100 }),
    tags: jsonb("tags").$type<string[]>(),
    metaTitle: varchar("meta_title", { length: 200 }),
    metaDescription: text("meta_description"),
    isPublished: boolean("is_published").default(false),
    publishedAt: timestamp("published_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("blog_posts_slug_idx").on(t.slug)]
);

// ─── CMS Pages ───────────────────────────────────────────────────
export const pages = pgTable("pages", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 300 }).notNull(),
  slug: varchar("slug", { length: 300 }).notNull().unique(),
  content: text("content"),
  metaTitle: varchar("meta_title", { length: 200 }),
  metaDescription: text("meta_description"),
  isPublished: boolean("is_published").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ─── Contact Submissions ─────────────────────────────────────────
export const contactSubmissions = pgTable("contact_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  subject: varchar("subject", { length: 300 }),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ─── AMC Plans ───────────────────────────────────────────────────
export const amcPlans = pgTable("amc_plans", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  description: text("description"),
  features: jsonb("features").$type<string[]>(),
  price: decimal("price", { precision: 10, scale: 2 }),
  durationMonths: integer("duration_months").default(12),
  propertyType: varchar("property_type", { length: 50 }),
  isPopular: boolean("is_popular").default(false),
  sortOrder: integer("sort_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ─── Notifications ───────────────────────────────────────────────
export const notifications = pgTable("notifications", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  message: text("message").notNull(),
  type: varchar("type", { length: 50 }).default("info"),
  isRead: boolean("is_read").default(false),
  link: text("link"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ─── Relations ───────────────────────────────────────────────────
export const categoriesRelations = relations(categories, ({ many }) => ({
  subcategories: many(subcategories),
  services: many(services),
}));

export const subcategoriesRelations = relations(subcategories, ({ one, many }) => ({
  category: one(categories, {
    fields: [subcategories.categoryId],
    references: [categories.id],
  }),
  services: many(services),
}));

export const servicesRelations = relations(services, ({ one }) => ({
  category: one(categories, {
    fields: [services.categoryId],
    references: [categories.id],
  }),
  subcategory: one(subcategories, {
    fields: [services.subcategoryId],
    references: [subcategories.id],
  }),
}));

export const emiratesRelations = relations(emirates, ({ many }) => ({
  cities: many(cities),
}));

export const citiesRelations = relations(cities, ({ one, many }) => ({
  emirate: one(emirates, {
    fields: [cities.emirateId],
    references: [emirates.id],
  }),
  areas: many(areas),
}));

export const areasRelations = relations(areas, ({ one }) => ({
  city: one(cities, {
    fields: [areas.cityId],
    references: [cities.id],
  }),
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  user: one(users, { fields: [orders.userId], references: [users.id] }),
  service: one(services, {
    fields: [orders.serviceId],
    references: [services.id],
  }),
}));

export const quotesRelations = relations(quotes, ({ one }) => ({
  user: one(users, { fields: [quotes.userId], references: [users.id] }),
}));

export const invoicesRelations = relations(invoices, ({ one }) => ({
  order: one(orders, { fields: [invoices.orderId], references: [orders.id] }),
  user: one(users, { fields: [invoices.userId], references: [users.id] }),
}));

export const favoritesRelations = relations(favorites, ({ one }) => ({
  user: one(users, { fields: [favorites.userId], references: [users.id] }),
  service: one(services, {
    fields: [favorites.serviceId],
    references: [services.id],
  }),
}));

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, { fields: [notifications.userId], references: [users.id] }),
}));

export const addressesRelations = relations(addresses, ({ one }) => ({
  user: one(users, { fields: [addresses.userId], references: [users.id] }),
}));
