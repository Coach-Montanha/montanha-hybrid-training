-- Allow reading programs, weeks, sessions, blocks and exercises across the ecosystem
-- This allows the public integration endpoints to read program data even if running under anon role.

CREATE POLICY "allow_anon_read_programs"
  ON public.programs FOR SELECT
  USING (true);

CREATE POLICY "allow_anon_read_program_weeks"
  ON public.program_weeks FOR SELECT
  USING (true);

CREATE POLICY "allow_anon_read_sessions"
  ON public.sessions FOR SELECT
  USING (true);

CREATE POLICY "allow_anon_read_session_blocks"
  ON public.session_blocks FOR SELECT
  USING (true);

CREATE POLICY "allow_anon_read_session_block_exercises"
  ON public.session_block_exercises FOR SELECT
  USING (true);
